import React, {
  useState,
  useEffect,
  useRef,
  MouseEvent,
  ChangeEvent
} from "react";
import { useObservable, useEventCallback } from "rxjs-hooks";
import { of, interval, Observable, fromEvent } from "rxjs";
import {
  map,
  concat,
  filter,
  tap,
  take,
  combineLatest,
  delay,
  debounceTime
} from "rxjs/operators";

interface IProps {
  name: string;
  intervalValue: number;
}

const CombineLatest: React.FC<IProps> = ({ name, intervalValue }) => {
  //const names = useObservable(getObservableNames$(5000));

  const [clickCallback, [description, x, y]] = useEventCallback(
    event$ =>
      event$.pipe(
        map((event: MouseEvent) => ["test", event.clientX, event.clientY]),
        delay(1000)
      ),
    ["nothing", 0, 0]
  );

  const [changeInput, count] = useEventCallback(
    event$ =>
      event$.pipe(
        map((event: MouseEvent) => event.target.value),
        debounceTime(1000)
      ),
    ""
  );
  return (
    <div className="watch">
      <button onClick={clickCallback}>click</button>
      <h3>
        {name}
        {description}({x},{y}){count}
      </h3>
      <input onChange={changeInput} />
    </div>
  );
};

export default CombineLatest;
