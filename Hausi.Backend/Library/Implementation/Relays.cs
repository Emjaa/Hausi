namespace Library;

public class RelaySwitch : IIOTDevice
{
    public string Name { get; set; }
    public int ID { get; set; }
    public string IP { get; set; }
    public string Token { get; set; }
    private ICollection<int> RelayIndices { get; set; }

    public RelaySwitch()
    {
        
    }
    
    public void Initialize()
    {
        throw new NotImplementedException();
    }
    
    public void Detach()
    {
        throw new NotImplementedException();
    }

    public void TurnOn(IEnumerable<int> indices)
    {
          
    }

    public void TurnOff(IEnumerable<int> indices)
    {
        
    }
    
    public void Toggle(IEnumerable<int> indices)
    {
        
    }
}