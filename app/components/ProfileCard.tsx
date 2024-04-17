"use client";

import React, { useState } from "react";
import { Dog, Cat } from "../components/AnimalClasses";

interface Animal {
  name: string;
  age: number;
  owner: string[];
  breed: string;
  walked: boolean;
  behaviorIssues: number;
  incrementBehavior: () => void;
}

export default function ProfileCard({
  currentAnimal,
}: {
  currentAnimal: Animal;
}) {
  // manage behavior
  const [behaviorIssues, setBehaviorIssues] = useState(
    currentAnimal.behaviorIssues
  );

  // increment behavior
  const incrementBehavior = () => {
    currentAnimal.incrementBehavior();
    setBehaviorIssues(behaviorIssues + 1);
  };

  return (
    <div>
      <h2>Dog Information</h2>
      <p>Name: {currentAnimal.name}</p>
      <p>Age: {currentAnimal.age}</p>
      <p>Owner(s): {currentAnimal.owner.join(", ")}</p>
      <p>Breed: {currentAnimal.breed}</p>
      <p>Walked: {currentAnimal.walked ? "Yes" : "No"}</p>
      <div className="flex">
        <p>Behavior Issues: {behaviorIssues}</p>
        <button onClick={incrementBehavior}>(+)</button>
      </div>
    </div>
  );
}
