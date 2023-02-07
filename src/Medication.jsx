import { useState, useEffect } from "react";
import axios from "axios";

export function Medication() {
  const [medication, setMedication] = useState([]);

  const handleIndexMedicine = () => {
    axios.get(`http://localhost:3000/medications.json`).then((response) => {
      console.log(response.data);
      setMedication(response.data);
    });
  };

  useEffect(handleIndexMedicine, []);

  return (
    <div className="w-screen h-auto min-h-screen">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-4">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Medications</h2>
          </div>
          <div className="rounded-xl bg-blue-400 text-white text-center mx-auto w-36 mb-10">
            <a href="/medication/new">Add Medication</a>
          </div>
          {medication.map((med) => (
            <div className="grid lg:grid-cols-1 gap-4 mt-5">
              <div key={med.id} className="p-5 bg-white rounded-lg border border-gray-200 shadow-md ">
                <h2 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  <p>{med.name}</p>
                </h2>
                <p className="mb-5 font-light text-gray-500 ">{med.directions}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <a
                      href="/reminders/new"
                      className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Set Reminder
                    </a>
                  </div>
                  <a
                    href="/medication/1"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div></div>
    </div>
  );
}
