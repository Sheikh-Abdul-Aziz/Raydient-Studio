"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, FC } from 'react';

interface SettingsContextType {
    isScrollbarDisabled: boolean;
    toggleScrollbar: () => void;
    isMaintenance: boolean;
    toggleMaintenance: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};

interface SettingsProviderProps {
    children: ReactNode;
}

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {

    const [isScrollbarDisabled, setIsScrollbarDisabled] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('isScrollbarDisabled');
            return saved !== null ? JSON.parse(saved) : true;
        }
        return true;
    });

    const toggleScrollbar = () => {
        setIsScrollbarDisabled((prev: boolean) => {
            const newState = !prev;
            localStorage.setItem('isScrollbarDisabled', JSON.stringify(newState));
            return newState;
        });
    };

    const [isMaintenance, setIsMaintenance] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('isMaintenance');
            return saved !== null ? JSON.parse(saved) : false;
        }
        return false;
    });

    const toggleMaintenance = () => {
        setIsMaintenance((prev: boolean) => {
            const newState = !prev;
            localStorage.setItem('isMaintenanceMode', JSON.stringify(newState));
            return newState;
        });
    };

    useEffect(() => {
        if (isScrollbarDisabled) {
            document.documentElement.classList.add('scrollbar-hidden');
        } else {
            document.documentElement.classList.remove('scrollbar-hidden');
        }
    }, [isScrollbarDisabled]);

    const value = {
        isScrollbarDisabled,
        toggleScrollbar,
        isMaintenance,
        toggleMaintenance
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};