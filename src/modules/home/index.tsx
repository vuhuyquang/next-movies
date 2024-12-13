'use client';
import './index.scss';
const Home = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="flex gap-8">
          <img alt="next" src="/readme/nextjs.svg" className="logo" title="Next" />
          <img alt="ts" src="/readme/typescript.svg" className="logo" title="Typescript" />
          <img alt="react" src="/readme/react.svg" className="logo" title="React" />
          <img alt="vite" src="/readme/vite.svg" className="logo" title="Vite" />
        </div>
      </div>
    </div>
  );
};

export default Home;
