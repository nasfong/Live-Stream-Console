import React from 'react';

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;

}) {
  return (
    <div className='flex flex-1 flex-col p-4 md:px-6'>
      <div className='bg-background sticky top-0 z-10 mb-4 flex items-start justify-between gap-4 pb-4'>
        {children}
      </div>
    </div>
  )
}
