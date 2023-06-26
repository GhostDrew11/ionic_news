import { Pipe, PipeTransform } from '@angular/core';
import { Source } from '../pages/sources/SourcesData';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(sources: any, term: any): any {
    if (!term) {
      return sources;
    }

    return sources.filter((source: Source) => {
      return source.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}
