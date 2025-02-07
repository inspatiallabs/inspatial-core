import { GoogleFontProp } from "./prop.ts";

interface FontDefinition {
  name: string;
  weights: string[];
  styles: string[];
  subsets: string[];
  axes?: Array<{
    tag: string;
    min: number;
    max: number;
    defaultValue: number;
  }>;
}

export interface InSpatialFontProp {
  variable?: string;
  className: string;
  style:
    | string[]
    | {
        fontFamily: string;
        fontWeight?: number;
        fontStyle?: string;
      };
}

type Display = "auto" | "block" | "swap" | "fallback" | "optional";

function generateFontTypeUnion(fontMap: Record<string, any>): string {
  const fontNames = Object.keys(fontMap).map((key) => {
    // Convert snake_case to exact font family name from the map
    const fontFamily = fontMap[key].family;
    // Escape any special characters and wrap in quotes
    return `"${fontFamily.replace(/"/g, '\\"')}"`;
  });

  return `/**
   * All available Google Font families
   * Auto-generated from font-map.json
   */
  export type GoogleFontTypes =
    | ${fontNames.join("\n  | ")};\n`;
}

/**
 * Generates TypeScript declarations for Google Fonts
 */
export async function generateGoogleFontTypes(
  fontMap: Record<string, GoogleFontProp["font"]>,
  outputPath: string
): Promise<void> {
  let output = `// Auto-generated Google Font declarations
  // Generated on ${new Date().toISOString()}
  
  import { InSpatialFontProp } from '../types'
  
  type Display = 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  
  ${generateFontTypeUnion(fontMap)}
  
  /**
   * Combined type of all available fonts (Google Fonts and Primitive Fonts)
   */
  export type AllFontVariants = GoogleFontTypes | PrimitiveFontTypes;
  
  `;

  // Rest of the existing generation code...
  output += `/**
   * ╔════════════════════════════════════════════════════════════════════════════╗
   * ║                    Google Fonts Type Declarations                          ║
   * ╠════════════════════════════════════════════════════════════════════════════╣
   * ║                                                                            ║
   * ║  Auto-generated type declarations for Google Fonts.                        ║
   * ║  DO NOT EDIT THIS FILE DIRECTLY - it is automatically generated.           ║
   * ║                                                                            ║
   * ║  To update this file, run the font generator script.                       ║
   * ║                                                                            ║
   * ╚════════════════════════════════════════════════════════════════════════════╝
   */\n\n`;

  for (const [key, font] of Object.entries(fontMap)) {
    const fontName = formatFontNameForDeclaration(key);
    const fontDef = processFontDefinition(font);

    output += generateFontDeclaration(fontName, fontDef);
    output += "\n";
  }

  await Deno.writeTextFile(outputPath, output);
}

/**
 * Formats a snake_case font name for TypeScript declaration
 */
function formatFontNameForDeclaration(key: string): string {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("_");
}

/**
 * Processes raw font data into a structured definition
 */
function processFontDefinition(font: GoogleFontProp["font"]): FontDefinition {
  return {
    name: font.family,
    weights: font.weights,
    styles: Array.isArray(font.style) ? font.style : [font.style],
    subsets: font.subsets,
    axes: font.axes,
  };
}

/**
 * Generates TypeScript declaration for a single font
 */
function generateFontDeclaration(name: string, font: FontDefinition): string {
  const weightsUnion = font.weights.map((w) => `'${w}'`).join(" | ");
  const stylesUnion = font.styles.map((s) => `'${s}'`).join(" | ");
  const subsetsUnion = font.subsets.map((s) => `'${s}'`).join(" | ");

  return `export declare function ${name}(
    options: {
      weight: ${weightsUnion} | Array<${weightsUnion}>
      style?: ${stylesUnion} | Array<${stylesUnion}>
      display?: Display
      variable?: string
      preload?: boolean
      fallback?: string[]
      adjustFontFallback?: boolean
      subsets?: Array<${subsetsUnion}>
      ${font.axes ? generateAxesOptions(font.axes) : ""}
    }
  ): InSpatialFontProp`;
}

/**
 * Generates TypeScript for font axes options
 */
function generateAxesOptions(axes: FontDefinition["axes"]): string {
  if (!axes) return "";

  return axes
    .map(
      (axis) => `
      ${axis.tag}?: number // min: ${axis.min}, max: ${axis.max}, default: ${axis.defaultValue}`
    )
    .join("");
}

// CLI script for Deno
if (import.meta.main) {
  const fontMap = JSON.parse(await Deno.readTextFile("./font-map.json"));
  await generateGoogleFontTypes(fontMap, "./fonts.ts");
}
