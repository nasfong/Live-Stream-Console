'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Moon, Sun } from 'lucide-react';

export function ThemeModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeToggle = React.useCallback(
    (e?: React.MouseEvent) => {
      const newMode = resolvedTheme === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;

      if (!document.startViewTransition) {
        setTheme(newMode);
        return;
      }

      // Set coordinates from the click event
      if (e) {
        root.style.setProperty('--x', `${e.clientX}px`);
        root.style.setProperty('--y', `${e.clientY}px`);
      }

      document.startViewTransition(() => {
        setTheme(newMode);
      });
    },
    [resolvedTheme, setTheme]
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant='secondary'
          size='icon'
          className='group/toggle relative size-8'
          onClick={handleThemeToggle}
        >
          <Sun className='absolute transition-all dark:rotate-90 dark:scale-0' />
          <Moon className='absolute scale-0 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Toggle theme
      </TooltipContent>
    </Tooltip>
  );
}
