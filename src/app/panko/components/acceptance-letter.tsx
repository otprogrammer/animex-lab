"use client";

import { useState } from "react";
import { saveAs } from "file-saver";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Select, SelectItem } from "@nextui-org/react";

const programs = [
  { value: "international_business", label: "International Business" },
  { value: "business_management", label: "Business Management" },
  { value: "dental_hygiene", label: "Dental Hygiene" },
  { value: "information_systems", label: "Development and Maintenance of Information Systems" }
];
export default function EditAcceptanceLetter() {
  const [formData, setFormData] = useState({
    month: "02",
    day: "0",

    student_name: "Mehdi Naibi",
    date_of_birth: "2002-07-25",
    passport_number: "DY2127619",
    program_name: "Business Management",
    tuition_fee: "2600 EUR",
    nationality: "Moroccan",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateDocument = async () => {
    try {
      const response = await fetch("/letter.docx");

      if (!response.ok) {
        throw new Error("Failed to load the Word document");
      }

      const blob = await response.blob();
      const reader = new FileReader();

      reader.onload = async (event) => {
        try {
          const content = event.target.result;
          const zip = new PizZip(content);
          const doc = new Docxtemplater(zip);

          doc.setData(formData);
          doc.render();

          const updatedBlob = doc.getZip().generate({ type: "blob" });
          saveAs(updatedBlob, "Updated_Acceptance_Letter.docx");
        } catch (error) {
          console.error("Error processing document:", error);
        }
      };

      reader.readAsArrayBuffer(blob);
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  const handleProgramChange = (e) => {
    setFormData({ ...formData, program_name: e.target.value });
  };
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <h2 className="text-xl font-bold">Acceptance Letter</h2>
      </CardHeader>
      <CardBody className="gap-4">
      <Input label="Month" name="month" value={formData.month} onChange={handleChange} />
      <Input label="Day" name="day" value={formData.day} onChange={handleChange} />

        <Input label="Student Name" name="student_name" value={formData.student_name} onChange={handleChange} />
        <Input
          label="Date of Birth"
          name="date_of_birth"
          type="date"
          value={formData.date_of_birth}
          onChange={handleChange}
        />
        <Input
          label="Passport Number"
          name="passport_number"
          value={formData.passport_number}
          onChange={handleChange}
        />
        <Select 
          label="Program Name" 
          name="program_name"
          value={formData.program_name}
          onChange={handleProgramChange}
          className="w-full"
        >
          {programs.map((program) => (
            <SelectItem key={program.value} value={program.label}>
              {program.label}
            </SelectItem>
          ))}
        </Select>
        {/* <Input label="Program Name" name="program_name" value={formData.program_name} onChange={handleChange} /> */}
        <Input label="Annual Tuition Fee" name="tuition_fee" value={formData.tuition_fee} onChange={handleChange} />
        <Input label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} />

      </CardBody>
      <CardFooter>
        <Button color="success" variant="bordered" onPress={generateDocument} className="w-full">
          Download Acceptance Letter
        </Button>
      </CardFooter>
    </Card>
  );
}
