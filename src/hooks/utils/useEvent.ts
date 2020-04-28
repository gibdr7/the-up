import { useEffect } from "react";
import { useLatestRef } from "./useLatestRef";

type Listener<EventObject> = (fn: EventObject) => void;
type AddListener<Event, EventObject> = (
    e: Event,
    fn: Listener<EventObject>
) => void;

export interface EventTarget<Event extends string, EventObject> {
    addEventListener: AddListener<Event, EventObject>;
    removeEventListener: AddListener<Event, EventObject>;
}

export const createEventDispatch = <Event extends string, EventObject>(
  target: EventTarget<Event, EventObject>,
  event: Event | Event[],
  handler: Listener<EventObject>,
) => {
  const wrapped = Array.isArray(event) ? [...event] : [event];
  for (const e of wrapped) {
    target.addEventListener(e, handler);
  }

  return () => {
    for (const e of wrapped) {
      target.removeEventListener(e, handler);
    }
  };
};

// example
// useEvent(anchor.current, "mousedown", () => { ... })
// do this for every time mousedown on this object
export const useEvent = <Event extends string, EventObject>(
  target: EventTarget<Event, EventObject> | null | undefined,
  event: Event | Event[],
  handler: Listener<EventObject> | null | undefined,
) => {
  const handlerRef = useLatestRef(handler);

  useEffect(() => {
    if (!target) {
      return;
    }

    return createEventDispatch(target, event, arg => {
            /* eslint-disable-next-line no-unused-expressions */
            handlerRef.current?.(arg);
    });
    // we assume that `event` will be a constand and won't change
    // this is important becuase we inline arrays sometimes
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [target]);
};

export const useEventOnce = <Event extends string, EventObject>(
  target: EventTarget<Event, EventObject>,
  event: Event,
  handler: Listener<EventObject>,
) => {
  const handlerRef = useLatestRef(handler);

  useEffect(() => {
    if (!target) {
      return;
    }

    const listener: Listener<EventObject> = arg => {
      handlerRef.current(arg);
      target.removeEventListener(event, listener);
    };

    return createEventDispatch(target, event, listener);
  }, [target, event, handlerRef]);
};
