export default function DoctorCard({ name, specialty }: { name: string; specialty: string }) {
  return (
    <div className="p-6 border rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{specialty}</p>
    </div>
  );
}
