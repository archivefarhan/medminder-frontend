import { useState, useEffect } from "react";
import axios from "axios";

export function Medication() {
  // const [medication, setMedication] = useState([]);

  // const handleIndexMedicine = () => {
  //   axios.get(`http://localhost:3000/medication.json`).then((response) => (
  //     console.log(response.data);
  //     setMedication(response.data);
  //   ))
  // };

  // useEffect(handleIndexMedicine, []);

  return (
    <div className="w-screen h-auto min-h-screen">
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Medications</h2>
          </div>
          <div className="rounded-xl bg-blue-400 text-white text-center mx-auto w-36 mb-10">
            <a href="/medication/new">Add Medication</a>
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
              <h2 class="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 ">
                <p>Medicine Name</p>
              </h2>
              <p class="mb-5 font-light text-gray-500 ">Lorem ipsum dolor sit amet.</p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <a href="/reminder/new" className="font-medium ">
                    Set Reminder
                  </a>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
