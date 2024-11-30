export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Team X</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-text">
              Our mission is to deliver outstanding software solutions that exceed our clients' expectations while simultaneously fostering an environment of learning and professional growth for students. We are committed to leveraging our expertise to mentor and train aspiring software developers, integrating their fresh perspectives into our projects to stay at the forefront of technological advancement.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-text">
              To be a leader in the software solutions industry, renowned for innovative products and for shaping the next generation of tech talent. We aim to bridge the gap between academic learning and practical application, creating a synergy where real-world projects not only meet customer needs but also serve as fertile training grounds for future professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

