import { useParams, Link } from "react-router-dom";
import { vehicles } from "../data/vehicles";
import { Button } from "../components/Button";
import { ArrowLeft } from "lucide-react";
import { getWhatsAppLink } from "../lib/utils";

export const VehicleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black text-white p-6">
        <h2 className="text-2xl mb-4">Vehicle not found</h2>
        <Link to="/">
          <Button>Back to Inventory</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-brand-blue hover:text-white mb-8 transition-colors">
          <ArrowLeft className="mr-2 size-5" />
          Back to Inventory
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-brand-charcoal p-4 rounded-lg">
            <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-auto rounded-md" />
          </div>

          <div>
            <span className="text-brand-blue uppercase tracking-widest text-sm font-semibold mb-2 block">
                {vehicle.brand}
            </span>
            <h1 className="text-4xl font-heading mb-4">{vehicle.name}</h1>
            <p className="text-2xl text-white mb-6">R{vehicle.price.toLocaleString()}</p>
            
            <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Year</span>
                    <span className="font-semibold">{vehicle.year}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Mileage</span>
                    <span className="font-semibold">{vehicle.mileage.toLocaleString()} km</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Fuel Type</span>
                    <span className="font-semibold">{vehicle.fuelType}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Transmission</span>
                    <span className="font-semibold">{vehicle.transmission}</span>
                </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">{vehicle.description}</p>

            <div className="bg-brand-charcoal p-6 rounded-lg mb-8">
              <h3 className="text-xl font-heading mb-4 text-white">Financing & Insurance</h3>
              <ul className="text-gray-400 text-sm mb-4 space-y-2 list-disc list-inside">
                <li>Installment options: Up to 72 months.</li>
                <li>Deposit: From 0% to 10% depending on credit profile.</li>
                <li>Insurance Requirement: Comprehensive insurance is mandatory.</li>
                <li>Required Documents: ID, Driver's License, 3 Months Payslip, 3 Months Bank Statements.</li>
              </ul>
              <p className="text-brand-blue text-sm font-semibold">
                Contact us via WhatsApp to request a financing quote or discuss insurance options.
              </p>
            </div>
            
            <Button 
                className="w-full tracking-widest uppercase bg-brand-blue text-white hover:bg-blue-700"
                onClick={() => window.open(getWhatsAppLink(`${vehicle.brand} ${vehicle.name}`), "_blank")}
            >
                Inquire on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
