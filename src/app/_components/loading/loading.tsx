'use client'
import { CSSProperties } from 'react'
import { CircleLoader } from 'react-spinners';
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function Loading() {
  return <>
    <div className="sweet-loading top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute">
        <CircleLoader
            color="#e4002b"
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
  </>
}
