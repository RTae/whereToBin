from model.model import Model

m = Model()

def test_answer():
    assert m.health() == "Healthy", "Health check failed"