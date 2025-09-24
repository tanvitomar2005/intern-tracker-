// export default function Home() {
//   return <h1>Home Page</h1>;
// }
import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a365d 0%, #2d5aa0 50%, #4299e1 100%)",
          color: "#fff",
          textAlign: "center",
          padding: "80px 20px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <h1 
            style={{ 
              fontSize: "3.5rem", 
              fontWeight: "800", 
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Track internships and prepare for your career
          </h1>
          <p 
            style={{ 
              fontSize: "1.3rem", 
              maxWidth: "600px", 
              marginBottom: "3rem",
              opacity: "0.95",
              lineHeight: 1.5,
            }}
          >
            Your complete platform to manage internships, track applications, and connect with top employers. 
            Build real-world experience that gets you hired.
          </p>
          
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="/register"
              style={{
                padding: "16px 32px",
                backgroundColor: "#fff",
                color: "#1a365d",
                borderRadius: "8px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "1.1rem",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                transition: "all 0.2s ease",
              }}
            >
              Start free today
            </a>
            <a
              href="/login"
              style={{
                padding: "16px 32px",
                border: "2px solid rgba(255, 255, 255, 0.8)",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                borderRadius: "8px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "1.1rem",
                backdropFilter: "blur(10px)",
                transition: "all 0.2s ease",
              }}
            >
              Sign in
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        style={{ 
          padding: "60px 20px", 
          backgroundColor: "#f8fafc",
          textAlign: "center" 
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1a365d", marginBottom: "8px" }}>
                2.5x
              </div>
              <p style={{ color: "#64748b", fontSize: "1rem" }}>more likely to get hired after using our platform</p>
            </div>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1a365d", marginBottom: "8px" }}>
                500+
              </div>
              <p style={{ color: "#64748b", fontSize: "1rem" }}>companies posting internships</p>
            </div>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1a365d", marginBottom: "8px" }}>
                50K+
              </div>
              <p style={{ color: "#64748b", fontSize: "1rem" }}>students using Intern Tracker</p>
            </div>
          </div>
          
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#475569", 
            fontStyle: "italic",
            maxWidth: "600px",
            margin: "0 auto" 
          }}>
            We're here to ensure that your skills, dedication, and drive are recognized and rewarded.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "80px 20px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: "700", 
              marginBottom: "20px",
              color: "#1a365d",
            }}
          >
            Real experience for real careers
          </h2>
          <p 
            style={{ 
              fontSize: "1.2rem", 
              color: "#64748b", 
              marginBottom: "60px",
              maxWidth: "700px",
              margin: "0 auto 60px" 
            }}
          >
            Our platform connects students with meaningful internship experiences 
            and helps employers find top talent.
          </p>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            <div
              style={{
                padding: "40px 30px",
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                textAlign: "left",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s ease",
              }}
            >
              <div 
                style={{ 
                  width: "48px", 
                  height: "48px", 
                  backgroundColor: "#4299e1", 
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  fontSize: "1.5rem"
                }}
              >
                📊
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "12px", color: "#1a365d" }}>
                Student Dashboard
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.6 }}>
                Track your internship applications, manage deadlines, and monitor your progress 
                with an intuitive dashboard designed for students.
              </p>
            </div>
            
            <div
              style={{
                padding: "40px 30px",
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                textAlign: "left",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s ease",
              }}
            >
              <div 
                style={{ 
                  width: "48px", 
                  height: "48px", 
                  backgroundColor: "#48bb78", 
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  fontSize: "1.5rem"
                }}
              >
                🏢
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "12px", color: "#1a365d" }}>
                Employer Portal
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.6 }}>
                Post internship opportunities, manage applications, and connect with 
                talented students from top universities worldwide.
              </p>
            </div>
            
            <div
              style={{
                padding: "40px 30px",
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                textAlign: "left",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s ease",
              }}
            >
              <div 
                style={{ 
                  width: "48px", 
                  height: "48px", 
                  backgroundColor: "#ed8936", 
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  fontSize: "1.5rem"
                }}
              >
                🚀
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "12px", color: "#1a365d" }}>
                Career Preparation
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.6 }}>
                Access resources, get feedback on applications, and build the skills 
                you need to land your dream internship and career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        style={{ 
          padding: "80px 20px", 
          backgroundColor: "#1a365d", 
          color: "#fff",
          textAlign: "center" 
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: "700", 
              marginBottom: "20px" 
            }}
          >
            Ready to accelerate your career?
          </h2>
          <p 
            style={{ 
              fontSize: "1.2rem", 
              marginBottom: "40px",
              opacity: "0.9" 
            }}
          >
            Join thousands of students and employers who are already using Intern Tracker 
            to build meaningful career connections.
          </p>
          <a
            href="/register"
            style={{
              display: "inline-block",
              padding: "18px 36px",
              backgroundColor: "#4299e1",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "600",
              textDecoration: "none",
              fontSize: "1.1rem",
              boxShadow: "0 4px 14px rgba(66, 153, 225, 0.4)",
              transition: "all 0.2s ease",
            }}
          >
            Get started for free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 20px",
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          color: "#64748b",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ marginBottom: "10px", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Intern Tracker | Connecting students with career opportunities
          </p>
          <p style={{ fontSize: "0.8rem", opacity: "0.8" }}>
            Built with ❤️ for the next generation of professionals
          </p>
        </div>
      </footer>
    </div>
  );
}