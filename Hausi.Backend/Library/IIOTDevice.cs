namespace Library;

public interface IIOTDevice
{
    public string Name { get; set; }
    public int ID { get; set; }

    public string IP { get; set; }
    public string Token { get; set; }
    
    void Initialize();
    void Detach();
}