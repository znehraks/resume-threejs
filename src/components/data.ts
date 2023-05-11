import { Vector3 } from "three";

export interface ILogo {
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  width: number;
  depth: number;
  height: number;
}
export const logos: ILogo[] = [
  {
    name: "typescript",
    position: [-22, 2, -22],
    width: 4,
    depth: 4,
    height: 4,
    rotation: [0, 0, 0],
  },
  {
    name: "javascript",
    position: [-16, 2, -22],
    width: 4,
    depth: 4,
    height: 4,
    rotation: [0, 0, 0],
  },
  {
    name: "html",
    position: [-10, 2, -22],
    width: 4,
    depth: 4,
    height: 4,
    rotation: [0, 0, 0],
  },
  {
    name: "css",
    position: [-4, 2, -22],
    width: 4,
    depth: 4,
    height: 4,
    rotation: [0, 0, 0],
  },
  {
    name: "node",
    position: [0, 2, -18],
    width: 4,
    depth: 4,
    height: 4,
    rotation: [0, -Math.PI / 3, 0],
  },
  {
    name: "react",
    position: [-17, 2, -15],
    width: 4,
    depth: 4,
    height: 4,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "next",
    position: [-3, 2, -9],
    width: 4,
    depth: 4,
    height: 4,
    rotation: [0, -Math.PI / 7, 0],
  },

  {
    name: "three",
    position: [-11, 1.5, -5],
    width: 3,
    depth: 3,
    height: 3,
    rotation: [0, -Math.PI / 7, 0],
  },
  {
    name: "aws",
    position: [-22, 1, 0],
    width: 2,
    depth: 2,
    height: 2,
    rotation: [0, 0, 0],
  },
  {
    name: "flutter",
    position: [-22, 1, -5],
    width: 2,
    depth: 2,
    height: 2,
    rotation: [0, Math.PI / 8, 0],
  },
  {
    name: "graphql",
    position: [-20, 1, -10],
    width: 2,
    depth: 2,
    height: 2,
    rotation: [0, Math.PI / 17, 0],
  },

  {
    name: "pixi",
    position: [-15, 1, -10],
    width: 2,
    depth: 2,
    height: 2,
    rotation: [0, Math.PI / 17, 0],
  },
  {
    name: "python",
    position: [-10, 1, -17],
    width: 2,
    depth: 2,
    height: 2,
    rotation: [0, Math.PI / 17, 0],
  },
];

export const lavaconPositions = new Array(5)
  .fill(null)
  .map(
    (_, i) =>
      new Vector3(
        23 + 10 * Math.cos((Math.PI / 2 / 4) * (i + 4)),
        0,
        -23 + 10 * Math.sin((Math.PI / 2 / 4) * (i + 4))
      )
  );

// [
//   new Vector3(
//     23 + 10 * Math.cos((Math.PI / 2 / 4) * 4),
//     0,
//     -23 + 10 * Math.sin((Math.PI / 2 / 4) * 4)
//   ),
//   new Vector3(
//     23 + 10 * Math.cos((Math.PI / 2 / 4) * 5),
//     0,
//     -23 + 10 * Math.sin((Math.PI / 2 / 4) * 5)
//   ),
//   new Vector3(
//     23 + 10 * Math.cos((Math.PI / 2 / 4) * 6),
//     0,
//     -23 + 10 * Math.sin((Math.PI / 2 / 4) * 6)
//   ),
//   new Vector3(
//     23 + 10 * Math.cos((Math.PI / 2 / 4) * 7),
//     0,
//     -23 + 10 * Math.sin((Math.PI / 2 / 4) * 7)
//   ),
//   new Vector3(
//     23 + 10 * Math.cos((Math.PI / 2 / 4) * 8),
//     0,
//     -23 + 10 * Math.sin((Math.PI / 2 / 4) * 8)
//   ),
// ];
