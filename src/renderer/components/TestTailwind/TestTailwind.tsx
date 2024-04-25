import React from 'react';
import type { PropsWithChildren } from 'react';

export default function () {
  const themes = ['my-dark', 'business', 'dark', 'light'];

  return (
    <div className="w-[90%]">
      {themes.map((v) => (
        <ThemeContainer theme={v}>
          <h1 className="text-center bg-gray-400  text-black mb-4">
            [{v}] Hi Tailwind has been integrated.
          </h1>
          <div className="flex-auto items-center justify-center">
            <button className="flex-1 btn">Button</button>
            <button className="flex-1 btn btn-primary">Button primary</button>
            <button className="flex-1 btn btn-secondary">
              Button secondary
            </button>
            <button className="flex-1 btn btn-accent">Button accent</button>
            <button className="flex-1 btn btn-success">Button success</button>
            <button className="flex-1 btn btn-info">Button info</button>
            <button className="flex-1 btn btn-warning">Button warning</button>
            <button className="flex-1 btn btn-error">Button error</button>
          </div>
          <div>
            <button className="btn btn-outline">Button</button>
            <button className="btn btn-outline btn-primary">
              Button primary
            </button>
            <button className="btn  btn-outline btn-secondary">
              Button secondary
            </button>
            <button className="btn  btn-outline btn-accent">
              Button accent
            </button>
            <button className="btn btn-outline btn-success">
              Button success
            </button>
            <button className="btn btn-outline btn-info">Button info</button>
            <button className="btn btn-outline btn-warning">
              Button warning
            </button>
            <button className="btn btn-outline btn-error">Button error</button>
          </div>
        </ThemeContainer>
      ))}
      <div className="flex items-center justify-center bg-gray-700">
        <h1 className="text-blue-500">Hello Tailwind</h1>
      </div>
    </div>
  );
}

type T_ThemeContainerProps = PropsWithChildren<{ theme: string }>;

function ThemeContainer({ theme, children }: T_ThemeContainerProps) {
  return (
    <div className="p-2">
      <div data-theme={theme} className="p-4">
        {children}
      </div>
    </div>
  );
}
