"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";

type DragRevealProps = {
    prompt: string;
    image: string;
    imageAlt: string;
};

type ScratchRevealProps = {
    prompt: string;
    leadIn: string;
    murdererName: string;
};

export function DragReveal({ prompt, image, imageAlt }: DragRevealProps) {
    const stageRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const grabOffset = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 25, y: 50 });

    function moveTo(clientX: number, clientY: number) {
        const bounds = stageRef.current?.getBoundingClientRect();
        if (!bounds) return;
        const halfSquareWidth = bounds.width * 0.225;
        const halfSquareHeight = halfSquareWidth;
        const x = ((clientX - bounds.left) / bounds.width) * 100;
        const y = ((clientY - bounds.top) / bounds.height) * 100;
        setPosition({
            x: Math.max(22.5, Math.min(77.5, x)),
            y: Math.max((halfSquareHeight / bounds.height) * 100, Math.min(100 - (halfSquareHeight / bounds.height) * 100, y)),
        });
    }

    function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
        const buttonBounds = event.currentTarget.getBoundingClientRect();
        isDragging.current = true;
        grabOffset.current = {
            x: buttonBounds.left + buttonBounds.width / 2 - event.clientX,
            y: buttonBounds.top + buttonBounds.height / 2 - event.clientY,
        };
        event.currentTarget.setPointerCapture(event.pointerId);
        moveTo(event.clientX + grabOffset.current.x, event.clientY + grabOffset.current.y);
    }

    function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
        if (isDragging.current) {
            moveTo(event.clientX + grabOffset.current.x, event.clientY + grabOffset.current.y);
        }
    }

    function handlePointerUp() {
        isDragging.current = false;
    }

    function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            setPosition((value) => ({ ...value, x: Math.min(77.5, value.x + 3) }));
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            setPosition((value) => ({ ...value, x: Math.max(22.5, value.x - 3) }));
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            setPosition((value) => ({ ...value, y: Math.min(88, value.y + 3) }));
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setPosition((value) => ({ ...value, y: Math.max(12, value.y - 3) }));
        } else if (event.key === "Home") {
            event.preventDefault();
            setPosition({ x: 25, y: 50 });
        } else if (event.key === "End") {
            event.preventDefault();
            setPosition({ x: 77.5, y: 50 });
        }
    }

    return (
        <section className="my-8 border-y border-gray-300 py-6" aria-label="Drag to reveal an image">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#3380B7]">Cliffhanger 1</p>
            <p className="mt-1 text-gray-800">{prompt} Arrow keys move the square; Home resets it.</p>
            <div ref={stageRef} className="relative mx-auto mt-4 aspect-[17/10] w-full max-w-2xl touch-none overflow-hidden bg-gray-100">
                <div className="absolute left-[7.5%] top-1/2 aspect-[16/9] w-[35%] -translate-y-1/2 overflow-hidden bg-gray-200">
                    <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 35vw, 235px" className="object-cover" />
                </div>
                <button
                    type="button"
                    aria-label="Drag the large purple square away from the image to reveal it"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    onKeyDown={handleKeyDown}
                    className="absolute z-10 aspect-square w-[45%] touch-none cursor-grab border-4 border-white bg-violet-700 shadow-lg active:cursor-grabbing focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black"
                    style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </div>
            <p className="mt-3 text-sm text-gray-600">Move the square into the open space to uncover the image.</p>
        </section>
    );
}

export function ScratchReveal({ prompt, leadIn, murdererName }: ScratchRevealProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isScratching = useRef(false);
    const previousPoint = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const parent = canvas.parentElement;
        if (!parent) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        function paintCover(
            targetCanvas: HTMLCanvasElement,
            targetParent: HTMLElement,
            targetContext: CanvasRenderingContext2D,
        ) {
            const bounds = targetParent.getBoundingClientRect();
            const pixelRatio = window.devicePixelRatio || 1;
            targetCanvas.width = Math.max(1, Math.round(bounds.width * pixelRatio));
            targetCanvas.height = Math.max(1, Math.round(bounds.height * pixelRatio));
            targetContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            targetContext.globalCompositeOperation = "source-over";
            targetContext.fillStyle = "#6d28d9";
            targetContext.fillRect(0, 0, bounds.width, bounds.height);
        }

        paintCover(canvas, parent, context);
        const observer = new ResizeObserver(() => paintCover(canvas, parent, context));
        observer.observe(parent);
        return () => observer.disconnect();
    }, []);

    function eraseAt(clientX: number, clientY: number) {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        const bounds = canvas.getBoundingClientRect();
        const point = { x: clientX - bounds.left, y: clientY - bounds.top };
        context.globalCompositeOperation = "destination-out";
        context.lineWidth = 28;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.beginPath();
        if (previousPoint.current) {
            context.moveTo(previousPoint.current.x, previousPoint.current.y);
            context.lineTo(point.x, point.y);
            context.stroke();
        }
        context.beginPath();
        context.arc(point.x, point.y, 14, 0, Math.PI * 2);
        context.fill();
        context.globalCompositeOperation = "source-over";
        previousPoint.current = point;
    }

    function handlePointerDown(event: PointerEvent<HTMLCanvasElement>) {
        isScratching.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        eraseAt(event.clientX, event.clientY);
    }

    function handlePointerMove(event: PointerEvent<HTMLCanvasElement>) {
        if (isScratching.current) eraseAt(event.clientX, event.clientY);
    }

    function handlePointerUp() {
        isScratching.current = false;
        previousPoint.current = null;
    }

    return (
        <section className="my-8 border-y border-gray-300 py-6" aria-label="Scratch to reveal a mystery name">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#3380B7]">Cliffhanger 2</p>
            <p className="mt-1 text-gray-800">{prompt} Use your mouse or finger like a scratcher.</p>
            <p className="mt-5 text-lg leading-9 text-gray-900 sm:text-xl">
                {leadIn}{" "}
                <span className="relative inline-flex whitespace-nowrap bg-violet-700 px-2 font-bold text-white">
                    {murdererName}
                    <canvas
                        ref={canvasRef}
                        aria-hidden="true"
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                        className="absolute inset-0 size-full touch-none cursor-crosshair"
                    />
                </span>.
            </p>
        </section>
    );
}
