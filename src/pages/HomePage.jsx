import React, { Fragment } from "react";
import NoteCard from "./../components/cards/NoteCard";
import CreateNoteCard from "../components/cards/CreateNoteCard";

function HomePage() {
  return (
    <Fragment>
      <div className="flex flex-col items-center gap-3 py-3 pt-6 *:w-full *:md:w-8/12">
        <CreateNoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </Fragment>
  );
}

export default HomePage;
