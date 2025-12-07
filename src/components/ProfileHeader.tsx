import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import profileImage from 'figma:asset/f11b4fe8bf23ec3618cf9dc66eb59a5d24eeba68.png';

export function ProfileHeader() {
  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
      <div className="flex flex-col items-center md:items-start">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mb-8 border-4 border-black bg-black">
          <ImageWithFallback
            src={profileImage}
            alt="Marcos José Canêjo"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex items-center justify-center gap-4 w-full">
          <a
            href="mailto:marcos.azevedo@unicap.br"
            className="w-12 h-12 rounded-full bg-gray-900 hover:bg-yellow-600 transition-colors flex items-center justify-center"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mjcea/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-900 hover:bg-yellow-600 transition-colors flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/mjcea"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-900 hover:bg-yellow-600 transition-colors flex items-center justify-center"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      <div>
        <h1 className="text-5xl md:text-6xl text-yellow-500 mb-6">
          Marcos José Canêjo
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Received his Ph.D. in Computer Science from Federal University of Pernambuco in 2022, his M.Sc. degree in Systems Engineering from University of Pernambuco in 2016, and his B.Sc. Degree in Computer Science from Catholic University of Pernambuco in 2013. He is a Professor at Catholic University of Pernambuco, UNICAP, Brazil. His research interests include digital image processing and computational intelligence.
        </p>
      </div>
    </div>
  );
}