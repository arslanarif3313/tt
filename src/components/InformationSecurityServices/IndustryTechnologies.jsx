"use client";

const technologies = [
    {
        title: "Cisco",
        body: "Cisco provides a wide range of security solutions, including firewalls, intrusion prevention systems (IPS), and security information and event management (SIEM). Tymor Technologies integrates Cisco Secure technologies for a comprehensive approach to network and infrastructure security."
    },
    {
        title: "WatchGuard",
        body: "WatchGuard offers advanced network security, secure Wi-Fi, multi-factor authentication (MFA), and endpoint security. Tymor Technologies employs WatchGuard’s solutions to ensure robust protection against cyber threats and secure network environments."
    },
    {
        title: "SonicWall",
        body: "SonicWall delivers powerful network security solutions such as firewalls, unified threat management (UTM), and secure remote access. Tymor Technologies leverages SonicWall’s technology to provide advanced threat detection and prevention for businesses of all sizes."
    },
    {
        title: "Microsoft",
        body: "Microsoft provides a suite of cybersecurity solutions through its products like Microsoft Defender, Azure Security Center, and Office 365 Security & Compliance. Tymor Technologies utilizes Microsoft’s tools to enhance endpoint protection, cloud security, and overall IT governance."
    },
    {
        title: "Trend Micro",
        body: "Trend Micro offers advanced threat protection solutions, including endpoint security, email security, and cloud security. Tymor Technologies uses Trend Micro’s technology to provide comprehensive protection against a wide range of cyber threats."
    },
    {
        title: "Barracuda Networks",
        body: "Barracuda Networks provides security solutions such as email protection, network security, and data protection. Tymor Technologies employs Barracuda’s hardware and software solutions to ensure robust and reliable security for various business needs."
    },
    {
        title: "Palo Alto Networks",
        body: "Palo Alto Networks offers next-generation firewalls, advanced endpoint protection, and cloud-delivered security services. Tymor Technologies uses Palo Alto Networks’ solutions to deliver robust network security and threat prevention."
    }
];

export default function IndustryTechnologies() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    INDUSTRY-LEADING TECHNOLOGIES <br />
                    UTILIZED BY TYMOR TECHNOLOGIES
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {technologies.map((item, idx) => (
                        <div key={idx} className="bg-white text-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="font-bold text-lg mb-3 text-center">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-center">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
