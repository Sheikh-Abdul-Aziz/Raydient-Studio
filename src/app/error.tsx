"use client";

import React from "react";
import { Button } from "react-day-picker";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        <div>
            <p>
                {error.message}
            </p>
            <Button onClick={() => reset()}>
                Try Again
            </Button>
        </div>
    );
}