import manifest from '@/assets/process/manifest.json';
import haloManifest from '@/assets/process/halo-manifest.json';
import stool from '@/assets/hero-stool.png';

export interface Chapter { title: string; heading: string; text: string; pages: number[] }
export interface Product { id: 'halo' | 'tailor-d'; name: string; subtitle: string; type: string; year: string; materials: string; tools: string[]; image?: string; overview: string; chapters: Chapter[] }
export const products: Product[] = [
  { id: 'halo', name: 'Halo', subtitle: 'Wearable light for sound awareness', type: 'Lighting', year: '2026', materials: 'PLA prototype / warm LED strip / stainless steel bracelet cording', image: haloManifest.halo.cover.url, tools: ['Sketching', 'CAD modeling', '3D printing', 'LED diffusion testing'], overview: 'A wearable lighting concept for people who are hard of hearing. Halo explores how a subtle visual cue could draw attention to meaningful sound outside the wearer’s line of sight. An everyday bracelet brings light, comfort, and sound awareness together.', chapters: [
    { title: 'Research', heading: 'Illuminate what goes unheard.', text: 'Research and market analysis explored missed speech and visual cues. Early sketches considered clocks, timers, and accessories before focusing on a wearable for daily use.', pages: [2,4] },
    { title: 'Form', heading: 'An everyday accessory.', text: 'Watch-inspired studies evolved into a softer, oval form. A central opening reduced bulk and improved diffusion, while a user journey informed comfort, visibility, and use in busy environments.', pages: [3,5] },
    { title: 'Making', heading: 'Shaping the light.', text: 'Printed CAD models tested the face, attachments, and LED placement. Comparing several light sources led to a warm LED strip beneath a white PLA cover, with adjustable bracelet cording.', pages: [6,7] },
    { title: 'Outcome', heading: 'Light as a visual cue.', text: 'The final bracelet concept pairs a diffused illuminated face with a metal-inspired body and adjustable cording. The prototype explores form and light diffusion; sound detection remains a proposed function.', pages: [8,1] },
  ] },
  { id: 'tailor-d', name: 'TAILOR-D', subtitle: 'Portable step stool', type: 'Furniture', year: '2025', materials: 'Plywood', image: stool, tools: ['Fusion 360', 'CNC machining', 'Woodworking'], overview: 'A railing, a step, a seat. Designed with Melissa Yao for the tailoring studio, TAILOR-D is built from a single 2′ × 4′ sheet of plywood. A material constraint becomes a reason for every part.', chapters: [
    { title: 'Research', heading: 'Tailored to the task.', text: 'Comparing sewing chairs and step stools revealed a need for an accessible, multifunctional platform. User testing informed the step height and width, balancing comfort with the available material.', pages: [2,3,4,5] },
    { title: 'Form', heading: 'From a sketch to a structure.', text: 'Quarter-scale models explored height, curvature, and different support arrangements. The crossed backing draws from men’s tailoring. A half-scale iteration opened up the triangular cutouts and aligned the support angles.', pages: [6,7,8,9] },
    { title: 'Making', heading: 'A joint is a design decision.', text: 'Full-scale testing exposed the need for more lateral support. T-bone and dog-bone joints were tested before CNC cutting. An additional domino joint below the bottom step stabilized the final assembly.', pages: [10,11,12] },
    { title: 'Outcome', heading: 'One sheet. Multiple uses.', text: 'The finished stool brings together an integrated railing, two steps, and a seat. Close-up details and use photographs document the final joinery and the product in a tailoring setting.', pages: [13,14,15,16,1] },
  ] },
];
export const processPages = (id: Product['id']) => (id === 'halo' ? haloManifest.halo.pages : manifest[id].pages).map(page => page.url);
