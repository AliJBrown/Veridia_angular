
export default function calculateMod(attScore: number): string {
  const tier0 = 1; const value0 = "-5";
  const tier1 = 3; const value1 = "-4";
  const tier2 = 5; const value2 = "-3";
  const tier3 = 7; const value3 = "-2";
  const tier4 = 9; const value4 = "-1";
  const tier5 = 11; const value5 = "0";
  const tier6 = 13; const value6 = "+1";
  const tier7 = 15; const value7 = "+2";
  const tier8 = 17; const value8 = "+3";
  const tier9 = 19; const value9 = "+4";
  const tier10 = 21; const value10 = "+5";
  const tier11 = 23; const value11 = "+6";
  const tier12 = 25; const value12 = "+7";
  const tier13 = 27; const value13 = "+8";
  const tier14 = 29; const value14 = "+9";
  const value15 = "+10";
  let mod: string;

  if (attScore <= tier0) { mod = value0; }
  else if (attScore <= tier1) { mod = value1; }
  else if (attScore <= tier2) { mod = value2; }
  else if (attScore <= tier3) { mod = value3; }
  else if (attScore <= tier4) { mod = value4; }
  else if (attScore <= tier5) { mod = value5; }
  else if (attScore <= tier6) { mod = value6; }
  else if (attScore <= tier7) { mod = value7; }
  else if (attScore <= tier8) { mod = value8; }
  else if (attScore <= tier9) { mod = value9; }
  else if (attScore <= tier10) { mod = value10; }
  else if (attScore <= tier11) { mod = value11; }
  else if (attScore <= tier12) { mod = value12; }
  else if (attScore <= tier13) { mod = value13; }
  else if (attScore <= tier14) { mod = value14 }
  else { mod = value15; }
  return mod;

}