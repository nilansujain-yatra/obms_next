export default function MagnificientCities(){
    return (
        <section className="py-16 sm:py-10 px-4 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center">
            Magnificent Cities of Rajasthan
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Each city possesses a distinct identity enriched with heritage, culture, traditions, and unique beauty of Rajasthan
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map placeholder */}
            <div className="h-96 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center text-center">
              <div>
                <p className="text-6xl mb-4">🗺️</p>
                <p className="text-muted-foreground">Interactive Map</p>
              </div>
            </div>

            {/* City Info */}
            <div>
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h4 className="text-2xl font-bold text-primary mb-4">Jaipur</h4>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">32°C</p>
                    <p className="text-xs text-muted-foreground">Avg Temp</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">80%</p>
                    <p className="text-xs text-muted-foreground">Humidity</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">₹3K</p>
                    <p className="text-xs text-muted-foreground">Avg Cost</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  The City Palace, Jantar Mantar, Hawa Mahal and other magnificent structures showcase the city's royal legacy.
                </p>
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  Explore Jaipur
                </button>
              </div>

            
            </div>
          </div>
        </div>
      </section>
    );
}