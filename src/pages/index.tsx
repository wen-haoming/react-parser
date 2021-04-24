import styles from './index.less';
import TestRenderer from 'react-test-renderer'; // ES6

export default function IndexPage() {

  const testRenderer = TestRenderer.create(
      <div>123123</div>
  );

  return (
    <div>
      {JSON.stringify(testRenderer.toJSON())}
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
