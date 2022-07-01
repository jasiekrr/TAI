import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { GamesTable } from '../models/games-table';
import { SessionHttpService } from '../session-http.service';

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<GamesTable> {
  games: GamesTable[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private sessionHttpService: SessionHttpService) {
    super();

    const subscription = this.sessionHttpService.GetGamesTable().subscribe({
      next: (playerGames: GamesTable[]) => {
        this.games = playerGames.map((game)=> ({date: game.date, algebraicNotation: game.algebraicNotation, result: game.result, whitePlayer: game.whitePlayer, blackPlayer: game.blackPlayer}));
        console.log(this.games);
      }
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<GamesTable[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.games), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.games ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: GamesTable[]): GamesTable[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return this.games.splice(startIndex, this.paginator.pageSize);
    } else {
      return this.games;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: GamesTable[]): GamesTable[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return this.games;
    }

    return this.games.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.date.toDateString(), b.date.toDateString(), isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
