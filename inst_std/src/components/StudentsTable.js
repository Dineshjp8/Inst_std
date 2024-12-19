export default function StudentsTable({ students }) {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Cohort</th>
          <th className="border border-gray-300 px-4 py-2">Courses</th>
          <th className="border border-gray-300 px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td className="border border-gray-300 px-4 py-2">{student.name}</td>
            <td className="border border-gray-300 px-4 py-2">{student.cohort}</td>
            <td className="border border-gray-300 px-4 py-2">{student.courses}</td>
            <td className="border border-gray-300 px-4 py-2">
              <span
                className={`inline-block w-4 h-4 rounded-full ${
                  student.status ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
