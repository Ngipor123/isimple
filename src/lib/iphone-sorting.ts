// Custom sorting helper for iPhone models
export function sortIPhoneModelsChronologically(models: any[]) {
  // Helper to extract the numeric generation and details from the name
  const getWeight = (name: string) => {
    const cleanName = name.toLowerCase();
    
    // Exact generation extraction
    let gen = 0;
    const match = cleanName.match(/iphone\s+(\d+)/);
    if (match) {
      gen = parseInt(match[1], 10);
    } else if (cleanName.includes('iphone x')) {
      // iPhone X series
      if (cleanName.includes('xs max')) gen = 10.5;
      else if (cleanName.includes('xs')) gen = 10.4;
      else if (cleanName.includes('xr')) gen = 10.3;
      else gen = 10;
    }

    // Pro / Max / Plus ordering within the same generation
    let subWeight = 0;
    if (cleanName.includes('pro max')) subWeight = 0.9;
    else if (cleanName.includes('pro')) subWeight = 0.8;
    else if (cleanName.includes('plus')) subWeight = 0.7;
    else if (cleanName.includes('air')) subWeight = 0.6;
    else if (cleanName.includes('mini')) subWeight = 0.4;
    else subWeight = 0.5; // base model

    return gen + subWeight;
  };

  return [...models].sort((a, b) => getWeight(b.name) - getWeight(a.name));
}
