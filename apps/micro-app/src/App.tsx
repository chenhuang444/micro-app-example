import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    // rsbuild 默认创建的 worker 就是 classic 模式的。
    // 如果要创建 module，则整个项目 target 必须是 esm。
    // 无法单独将 worker 编译成 esm
    const worker = new Worker(new URL('./test.worker.ts', import.meta.url));

    return () => {
      worker.terminate();
    }
  }, [])

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
