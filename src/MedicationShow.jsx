export function MedicationShow() {
  return (
    <div className="w-screen h-auto min-h-screen">
      <h1 className="mt-10 font-bold text-3xl text-center">Medication</h1>
      <div className="text-center mt-10">
        <p>Medication Name</p>
        <p>Directions</p>
        <p>Amount</p>
        <p>Measurement</p>
        <p>Frequency</p>
        <p>Set Reminder</p>
        <div className="bg-blue-400 rounded-md w-16 mx-auto text-white mt-4">
          <a href="/medication">Back</a>
        </div>
      </div>
    </div>
  );
}
