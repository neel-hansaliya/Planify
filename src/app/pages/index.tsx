import Head from "next/head";
import DestinationForm from "../components/DestinationForm";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <Head>
                <title className="text-black">AI Travel Planner</title>
            </Head>
            <h1 className="text-3xl text-black font-bold mb-6">AI-Powered Travel Itinerary Planner</h1>
            <DestinationForm />
        </div>
    );
}
