actor SimpleStorage{
  var storedData = 0;

  public query func getData() : async Nat{
    return storedData;
  };

  public func setData(value: Nat): async(){
    storedData := value;
  };

};