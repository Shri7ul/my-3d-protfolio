"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    const frameCount = 120; // Verified count

    // 1. Chunked Preloading
    useEffect(() => {
        let isMounted = true;
        const initialLoadCount = 30; // Critical chunk for immediate interaction

        // Helper to load a batch of images
        const loadBatch = async (startIndex: number, endIndex: number) => {
            const promises: Promise<HTMLImageElement>[] = [];

            for (let i = startIndex; i < endIndex; i++) {
                if (i >= frameCount) break;

                const promise = new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    const frameIndex = i.toString().padStart(3, '0');
                    img.src = `/sequence_webp/frame_${frameIndex}.webp`;
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                });
                promises.push(promise);
            }

            return Promise.all(promises);
        };

        const loadSequence = async () => {
            try {
                // 1. Load critical chunk first
                const firstBatch = await loadBatch(0, initialLoadCount);
                if (!isMounted) return;

                setImages(prev => {
                    const newImages = [...prev];
                    firstBatch.forEach((img, index) => {
                        newImages[index] = img;
                    });
                    return newImages;
                });
                setLoaded(true); // Allow interaction immediately after critical chunk

                // 2. Load remaining frames in background
                const remainingBatch = await loadBatch(initialLoadCount, frameCount);
                if (!isMounted) return;

                setImages(prev => {
                    const newImages = [...prev];
                    remainingBatch.forEach((img, index) => {
                        newImages[initialLoadCount + index] = img;
                    });
                    return newImages;
                });

            } catch (error) {
                console.error("Failed to load image sequence:", error);
            }
        };

        // Initialize array with empty slots
        setImages(new Array(frameCount).fill(null));
        loadSequence();

        return () => { isMounted = false; };
    }, []);

    // 2. Scroll Hook
    const { scrollYProgress } = useScroll(); // Global scroll 0-1

    // Map 0-1 to 0-(frameCount-1)
    const renderIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    // 3. Render Loop
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images.length) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Use current image - handle missing frames during progressive load
        const img = images[Math.round(index)];
        if (!img) return;

        // Handle High DPI or basic resizing
        // For coverage, we calculate aspect ratios
        // But simplistic approach first: fit to canvas size
        const parent = canvas.parentElement;
        if (parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }

        // DRAW IMAGE (Cover Logic)
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.width;
        const ih = img.height;

        const ratio = Math.max(cw / iw, ch / ih);
        const nw = iw * ratio;
        const nh = ih * ratio;
        const cx = (cw - nw) / 2;
        const cy = (ch - nh) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, cx, cy, nw, nh);
    };

    // Sync with scroll
    useMotionValueEvent(renderIndex, "change", (latest) => {
        if (loaded) {
            requestAnimationFrame(() => render(latest));
        }
    });

    // Initial draw when loaded
    useEffect(() => {
        if (loaded) render(0);
    }, [loaded]);

    return (
        <div className="h-[500vh] w-full relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />

                <Overlay />

                {/* Loading Indicator */}
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 z-20">
                        <div className="animate-pulse">Loading Experience...</div>
                    </div>
                )}
            </div>
        </div>
    );
}
