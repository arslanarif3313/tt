'use client';

import { useForm } from 'react-hook-form';
import { Mail, Phone, Building, CircleCheck, } from 'lucide-react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading/Heading';
import GridSectionFive from '@/components/ui/GridSection/GridSectionFive';
import MlHowTo from '@/components/MachineLearning/MlHowTo';

// Note: Client component - metadata should be in layout.jsx

export default function MachineLearning() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* HERO SECTION */}
      <Heading heading={'Machine Learning'}></Heading>


      {/* WHAT IS ML */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image Section */}
          <div className="relative w-full h-full">
            <Image
              src="/machine-learning-1.webp" // Replace with your image path
              alt="ML Visual"
              width={600}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right Content Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">What is Machine Learning (ML)?</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Machine Learning (ML) is a subset of artificial intelligence (AI) that enables systems to learn and improve from experience
              without being explicitly programmed. ML algorithms use statistical techniques to identify patterns in data, allowing the
              systems to make predictions or decisions based on new data. The primary components of ML include:
            </p>
            <div>
              <div className="gap-3 ">
                <div className='flex items-center gap-3'>
                  <CircleCheck className="text-primary mt-1" size={30} />
                  <h3 className='text-xl'>Data</h3>
                </div>

                <p>The raw material that is processed to extract insights. Quality and quantity of data significantly influence the effectiveness of ML models</p>
              </div>
              <div className="gap-3 ">
                <div className='flex items-center gap-3'>
                  <CircleCheck className="text-primary mt-1" size={30} />
                  <h3 className='text-xl'>Algorithms</h3>
                </div>

                <p>Procedures or formulas that the ML model uses to analyze data and learn from it. Examples include linear regression, decision trees, and neural networks.</p>
              </div>
              <div className="gap-3 ">
                <div className='flex items-center gap-3'>
                  <CircleCheck className="text-primary mt-1" size={30} />
                  <h3 className='text-xl'>Model</h3>
                </div>

                <p>He output of the ML algorithm after it has been trained on data. This model can make predictions or decisions based on new input data.</p>
              </div>
              <div className="gap-3 ">
                <div className='flex items-center gap-3'>
                  <CircleCheck className="text-primary mt-1" size={30} />
                  <h3 className='text-xl'>Training</h3>
                </div>

                <p>The process of feeding data into an ML algorithm to help it learn and adjust.</p>
              </div>
              <div className="gap-3 ">
                <div className='flex items-center gap-3'>
                  <CircleCheck className="text-primary mt-1" size={30} />
                  <h3 className='text-xl'>Evaluation</h3>
                </div>

                <p>Assessing the performance of the ML model to ensure it meets the desired accuracy and reliability.</p>
              </div>
            </div>


            <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded" style={{ display: 'none' }}>
              More
            </button>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      {/* HOW TO INCORPORATE */}
      <GridSectionFive
        title={"Key Concerns for Your Company"}
        grid={[
          {
            title: "Enhanced Decision Making",
            desc: "ML can analyze vast amounts of data and provide actionable insights, leading to more informed and data-driven decisions.",
            icon: "assets/icons/decision-making.webp",
          },
          {
            title: "Automation",
            desc: "ML automates repetitive tasks, reducing human error and freeing up staff for more complex activities.",
            icon: "assets/icons/auto.webp",
          },
          {
            title: "Personalization",
            desc: "Tailor services and products to individual customer preferences, enhancing customer satisfaction and loyalty.",
            icon: "/assets/icons/per.webp",
          },
          {
            title: "Fraud Detection",
            desc: "Identify and mitigate fraudulent activities in real-time by recognizing patterns and anomalies in transactions.",
            icon: "/assets/icons/frd.webp",
          },
          {
            title: "Predictive Maintenance",
            desc: "Predict equipment failures before they occur, reducing downtime and maintenance costs.",
            icon: "/assets/icons/wrr.webp",
          },

        ]}

      ></GridSectionFive>

      {/* HOW TO INCORPORATE */}
      <MlHowTo></MlHowTo>

      {/* CURRENT EXAMPLE */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <Image src="/machine-learning/machine-learning.webp"
            alt="Current Example of ML Usage" className="rounded-md "
            width={900}
            height={900}

          />
          <div>
            <h2 className="text-2xl font-bold mb-4">Current Example of ML Usage</h2>
            <p>Customer Service Chatbots — ML chatbots improve customer satisfaction by handling inquiries and reducing agent workload.</p>
          </div>
        </div>
      </section>

      {/* HOW TYMOR CAN HELP */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: Heading + content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-wide mb-6">
                <span className="block">HOW TYMOR</span>
                <span className="block">TECHNOLOGIES CAN HELP</span>
              </h2>

              <p className="text-base leading-relaxed mb-6">
                <span className="font-semibold">Tymor Technologies</span> offers
                comprehensive solutions to help your company leverage the power of
                Machine Learning:
              </p>

              <ul className="list-disc pl-6 space-y-5">
                <li>
                  <span className="font-semibold">Consultation and Strategy:</span>{" "}
                  We help identify potential use cases for ML within your organization
                  and develop a strategic roadmap for implementation.
                </li>
                <li>
                  <span className="font-semibold">Data Management:</span>{" "}
                  Assistance in collecting, cleaning, and preparing data to ensure it
                  is ready for ML applications.
                </li>
                <li>
                  <span className="font-semibold">Model Development:</span>{" "}
                  Our experts build, train, and optimize ML models tailored to your
                  specific needs.
                </li>
                <li>
                  <span className="font-semibold">Integration:</span>{" "}
                  Seamless integration of ML models into your existing systems and
                  processes.
                </li>
                <li>
                  <span className="font-semibold">Ongoing Support:</span>{" "}
                  Continuous monitoring and support to ensure your ML solutions remain
                  effective and up‑to‑date.
                </li>
              </ul>

              <p className="text-base leading-relaxed mt-8">
                By partnering with Tymor Technologies, you can harness the potential
                of Machine Learning to drive innovation, efficiency, and competitive
                advantage in your business.
              </p>
            </div>

            {/* Right: Image */}
            <div className="lg:pl-6">
              <Image
                src="/machine-learning/machine-learning-2.webp"
                alt="Tymor team collaborating to plan ML initiatives"
                width={1200}
                height={800}
                className="w-full rounded-xl shadow-lg object-cover"
                // optional: keep a consistent ratio on mobile
                style={{ aspectRatio: "16 / 10" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
