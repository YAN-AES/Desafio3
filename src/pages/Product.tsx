//* Libraries imports
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

//* Store imports
import type { rootReducer } from "@/store/store";

//* Components imports
import { Button } from '@/components/ui/button';

export function Product() {
  const { value, increment, decrement } = useCounter();
  const params = useParams<{ id: string }>();

  return (
    <div>
      <h1>Product id = {params.id}</h1>
      <p>Value: {value}</p>
      <Button onPointerDown={increment}>Increment</Button>
      <Button onPointerDown={decrement}>Decrement</Button>
      <RenderCounter />
    </div>
  );
}

function RenderCounter() {
  const { value } = useCounter();
  return (
    <p>Value: {value}</p>
  );
}

function useCounter() {
  const value = useSelector((state: ReturnType<typeof rootReducer>) => state.counter.value);
  const dispatch = useDispatch();
  return {
    value,
    increment: () => dispatch({ type: 'counter/incremented' }),
    decrement: () => dispatch({ type: 'counter/decremented' })
  };
}