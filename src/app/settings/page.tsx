'use client';

import { useSettings } from "@/hooks/use-settings";
import { Switch } from '@/components/ui/switch'; 
import { Label } from "@/components/ui/label";

export default function SettingsPage() {

    const { isScrollbarDisabled, toggleScrollbar } = useSettings();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <div className="flex items-center space-x-2">
                <Switch id="scrollbar-toggle" checked={isScrollbarDisabled} onCheckedChange={toggleScrollbar} />
                <Label htmlFor="scrollbar-toggle">Disable Scrollbar</Label>
            </div>
        </div>
    );
}