import Image from "next/image";
import rooms from "@/data/rooms.json";
import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <>
    <Heading title='Available Rooms' />
      { rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} key={room.$id} /> )
      ) : <p>No room available at the moment</p> }
    </>
  );
}
