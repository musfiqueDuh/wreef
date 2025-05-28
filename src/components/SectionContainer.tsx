// components/SectionContainer.tsx (changed from .jsx to .tsx)
import React from 'react';

/**
 * Interface for the props of the SectionContainer component.
 */
interface SectionContainerProps {
  children: React.ReactNode; // Explicitly type children
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'; // Explicitly define allowed string literal types for size
  className?: string; // Explicitly type className
}

/**
 * A reusable container component for consistent section width and centering.
 * @param {SectionContainerProps} props - The props for the component.
 */
function SectionContainer({ children, size = "md", className = "" }: SectionContainerProps) {
  const sizes = {
    sm: "max-w-xl",
    md: "max-w-3xl",
    lg: "max-w-4xl",
    xl: "max-w-5xl",
    "2xl": "max-w-6xl",
  } as const; // Added 'as const' to make object keys literal types

  // Accessing sizes[size] is now safe because size is explicitly typed to match keys
  // And sizes object is 'as const', making its keys literal types.
  const sizeClass = sizes[size] || sizes.md; // Default to md if an invalid size is provided

  return (
    <div className={`${sizeClass} mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default SectionContainer;