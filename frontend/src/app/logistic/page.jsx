import Image from "next/image";
import StepperDemo from "../../../components/logistic/Stepper";

export default function Logistic() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div style={{margin: "5%"}}>

        <StepperDemo />
        </div>
    </main>
  );
}
