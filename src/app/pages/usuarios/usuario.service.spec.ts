import { TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';

describe('UsuarioService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
