'use client';
import { useState } from "react";

export default function Square({ value, onSquareClick }: { value: string, onSquareClick: () => void }) {
    return <button className="square" onClick={onSquareClick}>{value}</button>
}