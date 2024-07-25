import ClassRoom from './0-classroom';

/**
 * Creates an array of {ClassRoom}s with a specific size.
 */

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
