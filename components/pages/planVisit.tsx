export default function PlanVisit(){
    return (
        <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
            Plan Your Perfect Visit
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h4 className="text-xl font-semibold text-primary mb-6">
                  Create a customized itinerary for your preferences
                </h4>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Tell us about your visit
                    </label>
                    <input
                      type="text"
                      placeholder="What would you like to experience?"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Number of Travelers
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                      <option>1 person</option>
                      <option>2 people</option>
                      <option>3-4 people</option>
                      <option>5+ people</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm text-muted-foreground">Hotels</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm text-muted-foreground">Resorts</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm text-muted-foreground">Heritage Palaces</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm text-muted-foreground">Farms</span>
                    </label>
                  </div>

                  <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                    Generate Itinerary
                  </button>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center text-center">
                <div>
                  <img
                  src="/images/visit_plan.png"
                  alt="Plan Your Visit"
                  className="w-full h-full object-cover "
                />
                  {/* <p className="text-6xl mb-4">🧳</p>
                  <p className="text-primary font-semibold">Personalized Itineraries</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Fill in your preferences on the left to generate your perfect visit
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
