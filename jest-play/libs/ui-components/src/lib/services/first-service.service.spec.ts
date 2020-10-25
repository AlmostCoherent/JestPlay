import { FirstServiceService } from './first-service.service';
import { of } from 'rxjs';

describe('FirstServiceService', () => {
  let firstService: FirstServiceService;
  let spyObj: any;

  beforeEach(() => {
    firstService = new FirstServiceService(null);
  })

  it('should be created', () => {
    expect(firstService).toBeTruthy();
  });


  it("should return a value", () => {
    //Arrange
    let result: any;
    spyObj = jest.spyOn(firstService, 'getAllData').mockReturnValue(of([ "1", "2", "3" ]));
    
    //Action
    firstService.getAllData().subscribe((value) => {
      result = value;
    })

    //Assert
    expect(spyObj).toHaveBeenCalled();
    expect(result.length).toBe(3);
    expect(result[2]).toBe("3");
  })
});
