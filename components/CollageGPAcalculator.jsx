"use client";

import React, { useState, useEffect } from "react";

const GRADE_MAP = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  F: 0.0,
};

function prettyNumber(n) {
  if (!isFinite(n)) return "—";
  return Number.isInteger(n) ? n.toString() : n.toFixed(2);
}

export default function CollegeCPACalculatorClient() {
  const [courses, setCourses] = useState([
    { id: Date.now(), name: "Calculus I", credits: 3, grade: "A" },
    { id: Date.now() + 1, name: "Intro to Comp Sci", credits: 4, grade: "B+" },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("college_cpa_courses");
    if (saved) setCourses(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("college_cpa_courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = () => {
    setCourses([
      ...courses,
      { id: Date.now(), name: "New Course", credits: 3, grade: "A" },
    ]);
  };

  const removeCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id, updates) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, ...updates } : c)));
  };

  const totalCredits = courses.reduce(
    (acc, c) => acc + Number(c.credits || 0),
    0
  );
  const totalQualityPoints = courses.reduce((acc, c) => {
    const gp = GRADE_MAP[c.grade] ?? [parseFloat(c.grade) || 0];
    return acc + gp * Number(c.credits || 0);
  }, 0);

  const cpa = totalCredits ? totalQualityPoints / totalCredits : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-300 p-6 max-sm:px-3 overflow-hidden">
      {courses.map((course) => (
        <div key={course.id} className="flex gap-3 max-sm:gap-1.5 mb-3">
          <input
            value={course.name}
            onChange={(e) => updateCourse(course.id, { name: e.target.value })}
            className="flex-1 max-sm:w-40 border outline-none rounded-lg border-slate-200 py-1.5  px-3"
          />
          <input
            type="text"
            value={course.credits}
            onChange={(e) =>
              updateCourse(course.id, { credits: Number(e.target.value) })
            }
            className="w-20 max-sm:w-16 border outline-none rounded-lg border-slate-200 py-1.5 text-center"
          />
          <select
            value={course.grade}
            onChange={(e) => updateCourse(course.id, { grade: e.target.value })}
            className="w-24 max-sm:w-16 border outline-none rounded-lg border-slate-200 py-1.5 px-2 text-center"
          >
            {Object.keys(GRADE_MAP).map((g) => (
              <option key={g} value={g}>
                {g} ({GRADE_MAP[g]})
              </option>
            ))}
          </select>
          <button
            onClick={() => removeCourse(course.id)}
            className="bg-red-500  max-sm:text-xs max-sm:px-1 text-sm text-white px-2 py-1.5 rounded-lg"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addCourse}
        className="bg-slate-900 text-white px-4 py-2  rounded-lg mt-4"
      >
        + Add Course
      </button>
      <div className="mt-4 text-lg font-semibold max-sm:font-bold">
        GPA: {prettyNumber(cpa)}
      </div>
    </div>
  );
}
