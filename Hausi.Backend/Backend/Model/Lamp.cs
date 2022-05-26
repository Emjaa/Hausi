using System.Security.Cryptography;

namespace Backend.Model;

public class Lamp
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public bool State { get; set; }
}